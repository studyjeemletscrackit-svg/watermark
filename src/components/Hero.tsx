@@ .. @@
   return (
-    <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 min-h-screen flex items-center">
+    <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen flex items-center">
       <div className="absolute inset-0 bg-black opacity-20"></div>
       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
-        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
+        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in-up">
           BINGE'N 
-          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
+          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
             CELEBRATIONS
           </span>
         </h1>
-        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up">
+        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in-up">
           Premium Private Theater & Celebration Venue
         </p>
-        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up">
+        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up">
           Create unforgettable memories with your loved ones in our luxurious private theaters. 
           Perfect for birthdays, anniversaries, romantic dates, and special celebrations.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
           <Link
             to="/booking"
-            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
+            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
           >
             Book Your Experience
           </Link>
           <button
-            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
+            className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300"
             onClick={() => {
               document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
             }}
           >
             Learn More
           </button>