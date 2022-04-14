import { rest } from 'msw'

export default [
  rest.get('/cards', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'John Doe',
          cardNumber: '78282246310005',
          freez: false,
          thru: '12/22',
          cardLogo: 'visa',
        },
        {
          name: 'Mason Graham',
          cardNumber: '371449635398431',
          freez: false,
          thru: '12/22',
          cardLogo: 'visa',
        },
        {
          name: 'Esme Jenkins',
          cardNumber: '374245455400126',
          freez: true,
          thru: '12/22',
          cardLogo: 'visa',
        },
      ])
    )
  }),
  rest.get('/transactions', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          title: 'Hamleys',
          date: '20 May 2022',
          type: 'credit',
          card: 'debit',
          amount: 150,
          icon: 'storage',
        },
        {
          title: 'Hamleys',
          date: '20 May 2022',
          type: 'debit',
          card: 'credit',
          amount: 30,
          icon: 'flight',
        },
        {
          title: 'Hamleys',
          date: '20 May 2022',
          type: 'debit',
          card: 'credit',
          amount: 30,
          icon: 'megaphone',
        },
        {
          title: 'Hamleys',
          date: '20 May 2022',
          type: 'debit',
          card: 'debit',
          amount: 150,
          icon: 'storage',
        },
      ])
    )
  }),
]