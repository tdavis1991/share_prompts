import '@styles/globals.css';
import Feed from '@components/Feed';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={false}>
        <Provider>
          <div className='main'>
            <div className='gradient' />
            <main className='app'>
              <Nav />
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout