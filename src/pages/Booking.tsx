@@ .. @@
   return (
-    <div className="min-h-screen bg-gray-900 py-12">
+    <div className="min-h-screen bg-gray-50 py-12">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
-        <h1 className="text-4xl font-bold text-white text-center mb-12">
+        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
           Book Your Experience
         </h1>
         
-        <div className="bg-gray-800 rounded-xl shadow-lg p-8">
+        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
           <form onSubmit={handleSubmit} className="space-y-6">
             <div className="grid md:grid-cols-2 gap-6">
               <div>
-                <label className="block text-white text-sm font-medium mb-2">
+                <label className="block text-gray-900 text-sm font-medium mb-2">
                   Full Name *
                 </label>
                 <input
                   type="text"
                   required
                   value={formData.name}
                   onChange={(e) => setFormData({...formData, name: e.target.value})}
-                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
+                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                   placeholder="Enter your full name"
                 />
               </div>
               <div>
-                <label className="block text-white text-sm font-medium mb-2">
+                <label className="block text-gray-900 text-sm font-medium mb-2">
                   Phone Number *
                 </label>
                 <input
                   type="tel"
                   required
                   value={formData.phone}
                   onChange={(e) => setFormData({...formData, phone: e.target.value})}
-                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
+                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                   placeholder="Enter your phone number"
                 />
               </div>
             </div>

             <div>
-              <label className="block text-white text-sm font-medium mb-2">
+              <label className="block text-gray-900 text-sm font-medium mb-2">
                 Email Address *
               </label>
               <input
                 type="email"
                 required
                 value={formData.email}
                 onChange={(e) => setFormData({...formData, email: e.target.value})}
-                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
+                className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                 placeholder="Enter your email address"
               />
             </div>

             <div className="grid md:grid-cols-2 gap-6">
               <div>
-                <label className="block text-white text-sm font-medium mb-2">
+                <label className="block text-gray-900 text-sm font-medium mb-2">
                   Preferred Date *
                 </label>
                 <input
                   type="date"
                   required
                   value={formData.date}
                   onChange={(e) => setFormData({...formData, date: e.target.value})}
-                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
+                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                 />
               </div>
               <div>
-                <label className="block text-white text-sm font-medium mb-2">
+                <label className="block text-gray-900 text-sm font-medium mb-2">
                   Preferred Time *
                 </label>
                 <select
                   required
                   value={formData.time}
                   onChange={(e) => setFormData({...formData, time: e.target.value})}
-                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
+                  className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                 >
                   <option value="">Select time slot</option>
                   <option value="10:00 AM">10:00 AM</option>
                   <option value="1:00 PM">1:00 PM</option>
                   <option value="4:00 PM">4:00 PM</option>
                   <option value="7:00 PM">7:00 PM</option>
                   <option value="10:00 PM">10:00 PM</option>
                 </select>
               </div>
             </div>

             <div>
-              <label className="block text-white text-sm font-medium mb-2">
+              <label className="block text-gray-900 text-sm font-medium mb-2">
                 Package *
               </label>
               <select
                 required
                 value={formData.package}
                 onChange={(e) => setFormData({...formData, package: e.target.value})}
-                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
+                className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
               >
                 <option value="">Select a package</option>
                 <option value="Basic Experience - ₹2999">Basic Experience - ₹2999</option>
                 <option value="Premium Celebration - ₹4999">Premium Celebration - ₹4999</option>
                 <option value="Luxury Experience - ₹7999">Luxury Experience - ₹7999</option>
               </select>
             </div>

             <div>
-              <label className="block text-white text-sm font-medium mb-2">
+              <label className="block text-gray-900 text-sm font-medium mb-2">
                 Number of Guests *
               </label>
               <input
                 type="number"
                 required
                 min="1"
                 max="20"
                 value={formData.guests}
                 onChange={(e) => setFormData({...formData, guests: e.target.value})}
-                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
+                className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                 placeholder="Enter number of guests (max 20)"
               />
             </div>

             <div>
-              <label className="block text-white text-sm font-medium mb-2">
+              <label className="block text-gray-900 text-sm font-medium mb-2">
                 Special Requests
               </label>
               <textarea
                 rows={4}
                 value={formData.specialRequests}
                 onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
-                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
+                className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                 placeholder="Any special requests or requirements..."
               ></textarea>
             </div>

             <button
               type="submit"
               disabled={loading}
-              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
+              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
             >
               {loading ? 'Processing...' : 'Book Now & Pay'}
             </button>
           </form>
         </div>
       </div>