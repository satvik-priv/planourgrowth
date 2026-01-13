import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Team from "./pages/Team"
import Services from "./pages/Services"
import Work from "./pages/Work"
import Join from "./pages/Join"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import ForceBackToHome from "./components/ForceBackToHome"
import ChatAgent from './components/ChatAgent';


export default function App() {
    return (
        <>
            
            <ScrollToTop />
            <ForceBackToHome />
            <div className="min-h-screen flex flex-col">
            <Header />
            
                
            <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/services" element={<Services />} />
                <Route path="/work" element={<Work />} />
                <Route path="/join" element={<Join />} />
                <Route path="/contact" element={<Contact />} />
                </Routes>
                </main>
            <ChatAgent />
                <Footer />
                </div>
        
            
        </>
    )
}
