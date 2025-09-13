@@ .. @@
   return (
-    <section id="features" className="py-20 bg-gray-800">
+    <section id="features" className="py-20 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <h2 className="text-4xl font-bold text-center text-white mb-16">
+        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
           Why Choose BINGE'N CELEBRATIONS?
         </h2>
         <div className="grid md:grid-cols-3 gap-8">
           {features.map((feature, index) => (
             <div
               key={index}
-              className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
+              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
             >
-              <div className="text-pink-400 mb-4">
+              <div className="text-indigo-600 mb-4">
                 {feature.icon}
               </div>
-              <h3 className="text-xl font-semibold text-white mb-4">
+              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                 {feature.title}
               </h3>
-              <p className="text-gray-300">
+              <p className="text-gray-600">
                 {feature.description}
               </p>
             </div>