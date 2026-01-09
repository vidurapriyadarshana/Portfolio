import { useState, FormEvent } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const contactItems = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: portfolioData.personalInfo.email,
      href: `mailto:${portfolioData.personalInfo.email}`
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: portfolioData.personalInfo.phone,
      href: `tel:${portfolioData.personalInfo.phone}`
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: portfolioData.personalInfo.location,
      href: null
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error')
      setErrorMessage('Please fill in all fields')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address')
      return
    }

    try {
      // Get API key from environment variables (Vite uses VITE_ prefix)
      const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

      if (!apiKey) {
        // No API key configured, use mailto fallback
        throw new Error('No API key configured')
      }

      // Using Web3Forms API (free service)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          to_email: portfolioData.personalInfo.email
        })
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      // Fallback: Open default email client with pre-filled data
      const mailtoLink = `mailto:${portfolioData.personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
      window.location.href = mailtoLink

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <div id='contact' className='py-16 px-6 md:px-16 bg-transparent'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-10'>
          <span className='text-theme-light-gray font-professional text-xs tracking-[0.3em] uppercase'>Let's Connect</span>
          <h2 className='text-3xl md:text-5xl font-bold text-theme-white mt-2 font-professional'>Get In Touch</h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
          <div className='lg:col-span-2 space-y-6'>
            <div className='bg-theme-dark-gray/50 rounded-xl p-6 border border-theme-gray shadow-md backdrop-blur-sm'>
              <h3 className='text-xl font-bold text-theme-white mb-6 font-professional'>Contact Information</h3>

              <div className='space-y-4'>
                {contactItems.map((item, index) => {
                  const IconComponent = item.icon
                  const content = (
                    <div className='flex items-center gap-4 p-4 bg-theme-black rounded-sm hover:bg-theme-gray transition-colors border border-theme-gray'>
                      <div className='w-10 h-10 bg-theme-white rounded-sm flex items-center justify-center flex-shrink-0'>
                        <IconComponent className='text-theme-black' size={16} />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <p className='text-xs text-theme-light-gray uppercase tracking-wide mb-1 font-professional'>{item.label}</p>
                        <p className='text-theme-white font-medium text-sm break-words font-professional'>{item.value}</p>
                      </div>
                    </div>
                  )

                  return item.href ? (
                    <a key={index} href={item.href} className='block'>
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  )
                })}
              </div>

              <div className='mt-6 pt-6 border-t border-theme-gray'>
                <h4 className='text-xs font-semibold text-theme-white mb-3 uppercase tracking-wide font-professional'>Follow Me</h4>
                <div className='flex gap-3'>
                  <a
                    href={portfolioData.personalInfo.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-theme-white text-theme-black rounded-sm flex items-center justify-center hover:bg-theme-light-gray transition-all border border-theme-gray'
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href={portfolioData.personalInfo.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-theme-white text-theme-black rounded-sm flex items-center justify-center hover:bg-theme-light-gray transition-all border border-theme-gray'
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:col-span-3'>
            <div className='bg-theme-dark-gray/50 rounded-xl p-6 border border-theme-gray shadow-md backdrop-blur-sm'>
              <h3 className='text-xl font-bold text-theme-white mb-6 font-professional'>Send Me a Message</h3>

              {status === 'success' && (
                <div className='mb-4 p-4 bg-green-900/20 border border-green-500/50 rounded-sm flex items-center gap-3'>
                  <FaCheckCircle className='text-green-500' size={20} />
                  <p className='text-green-200 text-sm font-medium font-professional'>Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {status === 'error' && (
                <div className='mb-4 p-4 bg-red-900/20 border border-red-500/50 rounded-sm flex items-center gap-3'>
                  <FaExclamationCircle className='text-red-500' size={20} />
                  <p className='text-red-200 text-sm font-medium font-professional'>{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-xs font-semibold text-theme-light-gray mb-2 font-professional'>Full Name</label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className='w-full px-4 py-2.5 bg-theme-black border border-theme-gray rounded-sm focus:outline-none focus:border-theme-white transition-colors text-sm text-theme-white disabled:opacity-50 disabled:cursor-not-allowed placeholder-theme-gray/50 font-professional'
                      placeholder='John Doe'
                      required
                    />
                  </div>
                  <div>
                    <label className='block text-xs font-semibold text-theme-light-gray mb-2 font-professional'>Email Address</label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className='w-full px-4 py-2.5 bg-theme-black border border-theme-gray rounded-sm focus:outline-none focus:border-theme-white transition-colors text-sm text-theme-white disabled:opacity-50 disabled:cursor-not-allowed placeholder-theme-gray/50 font-professional'
                      placeholder='john@example.com'
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-xs font-semibold text-theme-light-gray mb-2 font-professional'>Subject</label>
                  <input
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className='w-full px-4 py-2.5 bg-theme-black border border-theme-gray rounded-sm focus:outline-none focus:border-theme-white transition-colors text-sm text-theme-white disabled:opacity-50 disabled:cursor-not-allowed placeholder-theme-gray/50 font-professional'
                    placeholder='Project Discussion'
                    required
                  />
                </div>

                <div>
                  <label className='block text-xs font-semibold text-theme-light-gray mb-2 font-professional'>Message</label>
                  <textarea
                    rows={5}
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className='w-full px-4 py-2.5 bg-theme-black border border-theme-gray rounded-sm focus:outline-none focus:border-theme-white transition-colors resize-none text-sm text-theme-white disabled:opacity-50 disabled:cursor-not-allowed placeholder-theme-gray/50 font-professional'
                    placeholder='Tell me about your project...'
                    required
                  />
                </div>

                <button
                  type='submit'
                  disabled={status === 'loading'}
                  className='w-full bg-theme-white text-theme-black py-3 rounded-sm hover:bg-theme-light-gray transition-all font-bold text-sm flex items-center justify-center gap-2 shadow-sm disabled:bg-theme-gray disabled:cursor-not-allowed font-professional'
                >
                  <span className='flex items-center gap-2'>
                    <FaPaperPlane size={14} />
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
