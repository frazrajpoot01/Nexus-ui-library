import React, { useState } from "react";
// 1. Button is a default export, so no curly braces around it.
import Button from "./components/Button";

// 2. Card is default, but the Header/Body/Footer are named pieces.
import Card, { CardHeader, CardBody, CardFooter } from "./components/Card";

// 3. We must name it 'Modal' (with an 'a') here so it matches the <Modal> tag you used on line 91!
import Modal from "./Model/model";
function App() {
   const [isModalOpen, setIsModalOpen] = useState(false);

   return (
      // The new premium dark background with full screen height
      <div className="min-h-screen bg-slate-950 text-slate-300 relative overflow-hidden selection:bg-indigo-500/30">
         {/* Subtle glowing background orbs */}
         {/* Subtle glowing background orbs - Emerald and Indigo mix */}
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
         <div className="max-w-5xl mx-auto p-8 lg:p-12 relative z-10">
            <header className="mb-16 border-b border-slate-800/60 pb-8">
               <h1 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                     Nexus
                  </span>{" "}
                  UI
               </h1>
               <p className="text-slate-500 mt-3 text-lg">
                  A premium, high-performance React component library.
               </p>
            </header>

            <div className="flex flex-col gap-10">
               {/* BUTTON SECTION */}
               <section className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
                  <h2 className="text-xl font-medium mb-8 border-b border-slate-800/60 pb-3 text-white">
                     Buttons
                  </h2>
                  <div className="flex flex-col gap-8">
                     <div className="demo-group">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">
                           Variants
                        </h3>
                        <div className="flex flex-wrap items-center gap-4">
                           <Button variant="primary">Primary Action</Button>
                           <Button variant="outline">Secondary</Button>
                           <Button variant="ghost">Ghost</Button>
                        </div>
                     </div>
                  </div>
               </section>

               {/* CARD SECTION */}
               <section className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
                  <h2 className="text-xl font-medium mb-8 border-b border-slate-800/60 pb-3 text-white">
                     Glassmorphic Cards
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <Card>
                        <CardHeader>Workspace Settings</CardHeader>
                        <CardBody>
                           Configure your environment variables and access
                           tokens. These changes will propagate to your
                           production deployments immediately.
                        </CardBody>
                        <CardFooter>
                           <Button variant="ghost" size="sm">
                              Discard
                           </Button>
                           <Button variant="primary" size="sm">
                              Deploy Changes
                           </Button>
                        </CardFooter>
                     </Card>

                     <Card>
                        <CardHeader>Pro Subscription</CardHeader>
                        <CardBody>
                           Unlock advanced analytics, custom domains, and
                           priority 24/7 support from our engineering team.
                           <div className="mt-6">
                              <Button variant="outline" className="w-full">
                                 View Pricing Plans
                              </Button>
                           </div>
                        </CardBody>
                     </Card>
                  </div>
               </section>

               {/* MODAL SECTION */}
               <section className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
                  <h2 className="text-xl font-medium mb-8 border-b border-slate-800/60 pb-3 text-white">
                     Overlay Dialogs
                  </h2>
                  <div className="demo-group">
                     <Button
                        variant="primary"
                        onClick={() => setIsModalOpen(true)}
                     >
                        Trigger Action Modal
                     </Button>
                  </div>

                  <Modal
                     isOpen={isModalOpen}
                     onClose={() => setIsModalOpen(false)}
                     title="Delete Repository"
                  >
                     <p className="mb-6 text-slate-400">
                        This action is irreversible. It will permanently delete
                        the{" "}
                        <strong className="text-slate-200 font-medium">
                           nexus-ui-core
                        </strong>{" "}
                        repository, along with all associated deployments, logs,
                        and database backups.
                     </p>
                     <div className="flex justify-end gap-3">
                        <Button
                           variant="ghost"
                           onClick={() => setIsModalOpen(false)}
                        >
                           Cancel
                        </Button>
                        <Button
                           variant="primary"
                           className="bg-gradient-to-r from-red-500 to-rose-600 shadow-red-500/25 hover:shadow-red-500/40 hover:from-red-400 hover:to-rose-500 text-white border-white/10"
                           onClick={() => setIsModalOpen(false)}
                        >
                           Confirm Deletion
                        </Button>
                     </div>
                  </Modal>
               </section>
            </div>
         </div>
      </div>
   );
}

export default App;
