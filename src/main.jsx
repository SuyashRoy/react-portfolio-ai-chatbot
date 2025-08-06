import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// export function Footer() {
//   const classes = useStyles(true);
//   return (
//     <div className={classes.root}>
//     <App className={classes.appBar} position="static"/>
//     </div>
//   );
// }
// <Footer />