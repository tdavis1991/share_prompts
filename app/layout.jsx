import '@styles/globals.css';
import { Nav, Provider } from '@components';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
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