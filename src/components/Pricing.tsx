@@ .. @@
   return (
-    <section className="py-20 bg-gray-900">
+    <section className="py-20 bg-gray-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <h2 className="text-4xl font-bold text-center text-white mb-16">
+        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
           Our Packages
         </h2>
         <div className="grid md:grid-cols-3 gap-8">
           {packages.map((pkg, index) => (
             <div
               key={index}
-              className={`p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
-                pkg.popular 
-                  ? 'bg-gradient-to-br from-pink-600 to-purple-700 ring-4 ring-pink-400' 
-                  : 'bg-gray-800'
+              className={`p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 border ${
+                pkg.popular
+                  ? 'bg-gradient-to-br from-indigo-50 to-purple-50 ring-4 ring-indigo-200 border-indigo-200'
+                  : 'bg-white border-gray-200'
               }`}
             >
               {pkg.popular && (
-                <div className="text-center mb-4">
-                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
+                <div className="text-center mb-4"> 
+                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                     Most Popular
                   </span>
                 </div>
               )}
-              <h3 className="text-2xl font-bold text-white mb-4 text-center">
+              <h3 className={`text-2xl font-bold mb-4 text-center ${
+                pkg.popular ? 'text-gray-900' : 'text-gray-900'
+              }`}>
                 {pkg.name}
               </h3>
-              <div className="text-center mb-6">
-                <span className="text-4xl font-bold text-white">₹{pkg.price}</span>
-                <span className="text-gray-300 ml-2">/{pkg.duration}</span>
+              <div className="text-center mb-6"> 
+                <span className={`text-4xl font-bold ${
+                  pkg.popular ? 'text-indigo-600' : 'text-gray-900'
+                }`}>₹{pkg.price}</span>
+                <span className="text-gray-600 ml-2">/{pkg.duration}</span>
               </div>
               <ul className="space-y-3 mb-8">
                 {pkg.features.map((feature, featureIndex) => (
-                  <li key={featureIndex} className="flex items-center text-gray-300">
-                    <Check className="h-5 w-5 text-green-400 mr-3" />
+                  <li key={featureIndex} className="flex items-center text-gray-600">
+                    <Check className="h-5 w-5 text-green-500 mr-3" />
                     {feature}
                   </li>
                 ))}
               </ul>
               <Link
                 to="/booking"
-                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
+                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                   pkg.popular
-                    ? 'bg-white text-purple-700 hover:bg-gray-100'
-                    : 'bg-pink-600 text-white hover:bg-pink-700'
+                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
+                    : 'bg-gray-900 text-white hover:bg-gray-800'
                 }`}
               >
                 Book Now