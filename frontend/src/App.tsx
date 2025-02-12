//import { ThirdwebProvider,  } from "@thirdweb-dev/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Mumbai } from "@thirdweb-dev/chains";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import TrackParcel from "./pages/TrackParcel";
import SendParcel from "./pages/SendParcel";
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ApiDocs from "./pages/ApiDocs";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminShipments from "./pages/admin/AdminShipments";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminBlockchain from "./pages/admin/AdminBlockchain";
import AdminUsers from "./pages/admin/AdminUsers";
import AgentDashboard from './pages/agent/AgentDashboard';
//import AgentShipments from './pages/agent/AgentShipments';
import ClearingDashboard from './pages/clearing/ClearingDashboard';
//import ClearingRequests from './pages/clearing/ClearingRequests';
import AiAssistant from './pages/ai/AiAssistant';
import AiAnalytics from './pages/ai/AiAnalytics';
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NotFound from "./pages/NotFound";
//import WalletConnect from "./components/auth/WalletConnect";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ParticleConnectkit } from "./components/auth/connectkit";
const queryClient = new QueryClient();



export default function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <ParticleConnectkit>


            <Router>
               <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-grow pt-16">
                     <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/track" element={<TrackParcel />} />
                        <Route path="/send" element={<SendParcel />} />
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/docs" element={<ApiDocs />} />



                        <Route path="/admin/login" element={<AdminLogin />} />
                        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
                        <Route path="/admin/shipments" element={<ProtectedRoute><AdminShipments /></ProtectedRoute>} />
                        <Route path="/admin/analytics" element={<ProtectedRoute><AdminAnalytics /></ProtectedRoute>} />
                        <Route path="/admin/blockchain" element={<ProtectedRoute><AdminBlockchain /></ProtectedRoute>} />
                        <Route path="/admin/users" element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
                        <Route path="*" element={<NotFound />} />


                        {/* Agent Routes */}
                        <Route path="/agent" element={<ProtectedRoute><AgentDashboard /></ProtectedRoute>} />
                        {/*<Route path="/agent/shipments" element={<ProtectedRoute><AgentShipments /></ProtectedRoute>} />*/}

                        {/* Clearing Officer Routes */}
                        <Route path="/clearing" element={<ProtectedRoute><ClearingDashboard /></ProtectedRoute>} />
                        {/*<Route path="/clearing/requests" element={<ProtectedRoute><ClearingRequests /></ProtectedRoute>} />*/}

                        {/* AI Features */}
                        <Route path="/ai/assistant" element={<AiAssistant />} />
                        <Route path="/ai/analytics" element={<AiAnalytics />} />

                     </Routes>
                  </main>
                  <Footer />
               </div>
            </Router>
         </ParticleConnectkit>

      </QueryClientProvider>
   );
}
