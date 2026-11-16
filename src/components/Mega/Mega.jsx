import React, { useState, useRef, useEffect } from 'react'
import { useContext } from "react";
import { GlobalContextApi } from "../../GlobalApi/GlobalContextApi";
import Cart from "../Cart/Cart";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

const API_KEY = 'bura acari yaaz'
const ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions'

const SYSTEM_TEXT = 'Sən onlayn mağazanın dəstək köməkçisisən. Azərbaycan dilində qısa, aydın və nəzakətli cavab ver.'

const tabs = [
  { id: 'home', label: 'Ana səhifə' },
  { id: 'chats', label: 'Çatlarım' },
  { id: 'news', label: 'Xəbərlər' },
  { id: 'faq', label: 'Əsas suallar' }
]

const ChatBubbleIcon = () => (
  <svg width='30' height='30' viewBox='0 0 24 24' fill='white'>
    <path d='M7 3h10a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4h-8.5L5 21.5V18a4 4 0 0 1-2-3.5V7a4 4 0 0 1 4-4z' />
  </svg>
)

const ChevronDownIcon = () => (
  <svg width='30' height='30' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M6 9l6 6 6-6' />
  </svg>
)

const NavIcon = ({ id, active }) => {
  const fill = active ? 'currentColor' : 'none'
  const inner = active ? 'white' : 'currentColor'

  return (
    <svg width='26' height='26' viewBox='0 0 24 24' fill={fill} stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
      {id === 'home' && <path d='M3.5 11.5L12 4l8.5 7.5V19a2 2 0 0 1-2 2h-3.5v-6h-6v6H5.5a2 2 0 0 1-2-2z' />}

      {id === 'chats' && (
        <>
          <path d='M6 3.5h12a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-8L6 20v-3.5a2.5 2.5 0 0 1-2.5-2.5V6A2.5 2.5 0 0 1 6 3.5z' />
          <path d='M8 8.5h8M8 12h5' stroke={inner} />
        </>
      )}

      {id === 'news' && (
        <>
          <path d='M3.5 10v4a1 1 0 0 0 1 1H7l8 4V5L7 9H4.5a1 1 0 0 0-1 1z' />
          <path d='M19 9.5v5' />
        </>
      )}

      {id === 'faq' && (
        <>
          <circle cx='12' cy='12' r='9' />
          <path d='M9.7 9.6a2.4 2.4 0 1 1 3.4 2.2c-.7.4-1.1.9-1.1 1.7' stroke={inner} />
          <circle cx='12' cy='16.8' r='0.6' fill={inner} stroke={inner} />
        </>
      )}
    </svg>
  )
}

const newsList = [
  { id: 1, title: 'Yeni endirimlər başladı', text: 'Bu həftə seçilmiş məhsullarda 30%-dək endirim var.' },
  { id: 2, title: 'Çatdırılma xidməti genişləndi', text: 'Artıq daha çox bölgəyə eyni gün çatdırılma edirik.' },
  { id: 3, title: 'Mobil tətbiq yeniləndi', text: 'Yeni versiyada sifariş izləmə daha rahatdır.' }
]

const faqList = [
  { id: 1, q: 'Sifarişi necə izləyə bilərəm?', a: 'Kabinetdə "Sifarişlərim" bölməsinə daxil olub sifarişin statusuna baxa bilərsiniz.' },
  { id: 2, q: 'Qaytarılma necə olur?', a: 'Məhsulu 14 gün ərzində, istifadə olunmamış halda qaytara bilərsiniz.' },
  { id: 3, q: 'Ödəniş üsulları hansılardır?', a: 'Kartla, nağd və hissə-hissə ödəniş mümkündür.' }
]

const ChatWidget = () => {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState('home')
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading, tab])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const next = [...messages, { role: 'user', content: text }]
    setMessages(next)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-120b',
          messages: [{ role: 'system', content: SYSTEM_TEXT }, ...next]
        })
      })
      const data = await res.json()
      console.log(data)
      const errorText = typeof data?.error === 'string' ? data.error : data?.error?.message
      const reply = data?.choices?.[0]?.message?.content || errorText || 'Cavab alınmadı, bir az sonra yenidən cəhd edin.'
      setMessages([...next, { role: 'assistant', content: reply }])
    } catch (error) {
      console.log(error)
      setMessages([...next, { role: 'assistant', content: 'Xəta baş verdi. İnternet bağlantısını yoxlayın.' }])
    }

    setLoading(false)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') sendMessage()
  }

  const titles = { chats: 'Çatlarım', news: 'Xəbərlər', faq: 'Tez-tez Soruşulan Suallar' }

  return (
    <>
      {open && (
        <div className='fixed bottom-24 right-6 z-50 flex h-[600px] max-h-[80vh] w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl'>

          {tab === 'home' ? (
            <div className='relative flex flex-1 flex-col justify-end bg-gradient-to-br from-[#1e1b9a] via-[#a23a9e] to-[#f59ac4] p-6 text-white'>
              <button
                onClick={() => setOpen(false)}
                className='absolute right-5 top-5 text-2xl text-white/70'
              >
                ✕
              </button>
              <p className='text-[32px] font-[700] text-white/60'>Salam 👋</p>
              <p className='mb-6 text-[32px] font-[700] leading-tight'>Biz necə kömək edə bilərik?</p>
              <button
                onClick={() => setTab('chats')}
                className='rounded-full bg-white px-5 py-3 font-[600] text-[#ec4899]'
              >
                Bizə mesaj göndərin
              </button>
            </div>
          ) : (
            <>
              <div className='flex items-center justify-between border-b px-5 py-4'>
                <h2 className='flex-1 text-center text-[18px] font-[700]'>{titles[tab]}</h2>
                <button onClick={() => setOpen(false)} className='text-xl'>✕</button>
              </div>

              <div className='flex flex-1 flex-col overflow-y-auto'>

                {tab === 'chats' && (
                  <div className='flex flex-1 flex-col gap-3 p-4'>
                    {messages.length === 0 && (
                      <div className='my-auto text-center text-gray-500'>
                        <p className='mb-1 text-[18px] font-[600] text-black'>Hələ mesaj yoxdur</p>
                        <p>Sualınızı aşağıda yazın</p>
                      </div>
                    )}

                    {messages.map((m, i) => (
                      <div
                        key={i}
                        className={
                          m.role === 'user'
                            ? 'ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-[#ec4899] px-4 py-2 text-white'
                            : 'mr-auto max-w-[80%] whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2'
                        }
                      >
                        {m.content}
                      </div>
                    ))}

                    {loading && (
                      <div className='mr-auto rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2 text-gray-500'>
                        Yazır...
                      </div>
                    )}

                    <div ref={bottomRef}></div>
                  </div>
                )}

                {tab === 'news' && (
                  <div className='flex flex-col gap-3 p-4'>
                    {newsList.map((n) => (
                      <div key={n.id} className='rounded-xl border p-4'>
                        <p className='mb-1 font-[700]'>{n.title}</p>
                        <p className='text-gray-600'>{n.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {tab === 'faq' && (
                  <div className='flex flex-col'>
                    {faqList.map((f) => (
                      <div key={f.id} className='border-b'>
                        <button
                          onClick={() => setOpenFaq(openFaq === f.id ? null : f.id)}
                          className='flex w-full items-center justify-between p-4 text-left font-[600]'
                        >
                          {f.q}
                          <span>{openFaq === f.id ? '−' : '+'}</span>
                        </button>
                        {openFaq === f.id && <p className='px-4 pb-4 text-gray-600'>{f.a}</p>}
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {tab === 'chats' && (
                <div className='flex gap-2 border-t p-3'>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder='Mesaj yazın...'
                    className='flex-1 rounded-full bg-gray-100 px-4 py-2 outline-none'
                  />
                  <button
                    onClick={sendMessage}
                    disabled={loading}
                    className='rounded-full bg-[#ec4899] px-4 py-2 font-[600] text-white disabled:opacity-50'
                  >
                    ➤
                  </button>
                </div>
              )}
            </>
          )}

          <div className='flex border-t bg-white'>
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={
                  tab === t.id
                    ? 'flex flex-1 flex-col items-center gap-1 py-3 text-[12px] font-[600] text-[#ec4899]'
                    : 'flex flex-1 flex-col items-center gap-1 py-3 text-[12px] text-black'
                }
              >
                <NavIcon id={t.id} active={tab === t.id} />
                {t.label}
              </button>
            ))}
          </div>

        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className='fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#ec4899] shadow-lg'
      >
        {open ? <ChevronDownIcon /> : <ChatBubbleIcon />}
      </button>
    </>
  )
}


const Mega = () => {
  const { Api, loading, error } = useContext(GlobalContextApi);

  if (loading) {
    return (
      <div className="w-full flex justify-center py-10">
        <FaSpinner className="animate-spin text-blue-600" size={30} />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!Array.isArray(Api) || Api.length === 0) {
    return (
      <p className="text-center py-10">
        Məhsul tapılmadı.
      </p>
    );
  }
  return (

    <>
      <div className='w-full flex justify-center'>
        <div className='w-[90%] h-[150px] flex items-center gap-2'>
          <div className='bg-[#ff429a] text-[#fff] w-[100px] h-[60px]  rounded-[5px] flex items-center justify-center'>
            <h1 className='text-[#fff] font-[600] text-[33px]'>Mega</h1>
          </div>
          <p className='text-[40px] font-[600]'>endirimlər</p>
        </div>
      </div>

      <div className='w-full flex justify-center '>
        <div className='w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {Api.filter((item) => item.discountPercent > 0).sort(() => Math.random() - 0.5).slice(0, 5).map((element) => (

            <Cart
              id={element.id}
              image={element.images}
              title={element.name}
              price={element.price}
              oldPrice={element.oldPrice}
              discount={element.discountPercent ? `-${element.discountPercent}%` : ""}
              badge={element.category}
              monthly={(element.price / 12).toFixed(2)}
              reviews={element.rating?.count || 0}
              rating={element.rating?.average || 0}
              onAddToCart={() => console.log(`${element.name} səbətə əlavə olundu`)}
            />

          ))}
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-[50px]">
        <button className="bg-none border border-[#ea207e] text-[#ea207e] w-[350px] max-w-[90%] h-[50px]">
          Bütün endirimlərə baxmaq
        </button>
      </div>

      <ChatWidget />

    </>
  )
}

export default Mega