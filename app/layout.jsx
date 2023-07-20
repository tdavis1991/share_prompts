import '@styles/globals.css';
import Feed from '@components/Feed';
import Nav from '@components/Nav';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={false}>
        <div className='main'>
          <div className='gradient' />
          <main className='app'>
            <Nav />
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout