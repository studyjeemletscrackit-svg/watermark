@@ .. @@
   return (
-    <section className="py-20 bg-gray-800">
+    <section className="py-20 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <h2 className="text-4xl font-bold text-center text-white mb-16">
+        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
           Get In Touch
         </h2>
         <div className="grid md:grid-cols-2 gap-12">
           <div>
-            <h3 className="text-2xl font-semibold text-white mb-6">
+            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
               Contact Information
             </h3>
             <div className="space-y-4">
               {contactInfo.map((info, index) => (
-                <div key={index} className="flex items-center text-gray-300">
-                  <div className="text-pink-400 mr-4">
+                <div key={index} className="flex items-center text-gray-600">
+                  <div className="text-indigo-600 mr-4">
                     {info.icon}
                   </div>
                   <span>{info.text}</span>
@@ -1,7 +1,7 @@
             </div>
           </div>
           <div>
-            <h3 className="text-2xl font-semibold text-white mb-6">
+            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
               Send us a Message
             </h3>
             <form className="space-y-4">
               <input
                 type="text"
                 placeholder="Your Name"
-                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
+                className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
               />
               <input
                 type="email"
                 placeholder="Your Email"
-                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
+                className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
               />
               <textarea
                 placeholder="Your Message"
                 rows={4}
-                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
+                className="w-full px-4 py-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
               ></textarea>
               <button
                 type="submit"
-                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
+                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
               >
                 Send Message
               </button>