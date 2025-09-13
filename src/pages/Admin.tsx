@@ .. @@
   return (
-    <div className="min-h-screen bg-gray-900 py-12">
+    <div className="min-h-screen bg-gray-50 py-12">
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
-        <h1 className="text-4xl font-bold text-white text-center mb-12">
+        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
           Admin Dashboard
         </h1>
         
         {loading ? (
-          <div className="text-center text-white">Loading bookings...</div>
+          <div className="text-center text-gray-600">Loading bookings...</div>
         ) : (
-          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
+          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
             <div className="overflow-x-auto">
               <table className="w-full">
-                <thead className="bg-gray-700">
+                <thead className="bg-gray-50">
                   <tr>
-                    <th className="px-6 py-4 text-left text-white font-semibold">Name</th>
-                    <th className="px-6 py-4 text-left text-white font-semibold">Contact</th>
-                    <th className="px-6 py-4 text-left text-white font-semibold">Date & Time</th>
-                    <th className="px-6 py-4 text-left text-white font-semibold">Package</th>
-                    <th className="px-6 py-4 text-left text-white font-semibold">Guests</th>
-                    <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
-                    <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
+                    <th className="px-6 py-4 text-left text-gray-900 font-semibold">Name</th>
+                    <th className="px-6 py-4 text-left text-gray-900 font-semibold">Contact</th>
+                    <th className="px-6 py-4 text-left text-gray-900 font-semibold">Date & Time</th>
+                    <th className="px-6 py-4 text-left text-gray-900 font-semibold">Package</th>
+                    <th className="px-6 py-4 text-left text-gray-900 font-semibold">Guests</th>
+                    <th className="px-6 py-4 text-left text-gray-900 font-semibold">Status</th>
+                    <th className="px-6 py-4 text-left text-gray-900 font-semibold">Actions</th>
                   </tr>
                 </thead>
                 <tbody>
                   {bookings.map((booking) => (
-                    <tr key={booking.id} className="border-t border-gray-700">
-                      <td className="px-6 py-4 text-white">{booking.name}</td>
-                      <td className="px-6 py-4 text-gray-300">
+                    <tr key={booking.id} className="border-t border-gray-200">
+                      <td className="px-6 py-4 text-gray-900">{booking.name}</td>
+                      <td className="px-6 py-4 text-gray-600">
                         <div>{booking.phone}</div>
                         <div className="text-sm">{booking.email}</div>
                       </td>
-                      <td className="px-6 py-4 text-gray-300">
+                      <td className="px-6 py-4 text-gray-600">
                         <div>{booking.date}</div>
                         <div className="text-sm">{booking.time}</div>
                       </td>
-                      <td className="px-6 py-4 text-gray-300">{booking.package}</td>
-                      <td className="px-6 py-4 text-gray-300">{booking.guests}</td>
+                      <td className="px-6 py-4 text-gray-600">{booking.package}</td>
+                      <td className="px-6 py-4 text-gray-600">{booking.guests}</td>
                       <td className="px-6 py-4">
                         <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                           booking.status === 'confirmed' 
-                            ? 'bg-green-600 text-white' 
+                            ? 'bg-green-100 text-green-800' 
                             : booking.status === 'pending'
-                            ? 'bg-yellow-600 text-white'
-                            : 'bg-red-600 text-white'
+                            ? 'bg-yellow-100 text-yellow-800'
+                            : 'bg-red-100 text-red-800'
                         }`}>
                           {booking.status}
                         </span>
                       </td>
                       <td className="px-6 py-4">
                         <div className="flex space-x-2">
                           <button
                             onClick={() => updateBookingStatus(booking.id, 'confirmed')}
-                            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
+                            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                           >
                             Confirm
                           </button>
                           <button
                             onClick={() => updateBookingStatus(booking.id, 'cancelled')}
-                            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
+                            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                           >
                             Cancel
                           </button>
                         </div>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
               {bookings.length === 0 && (
-                <div className="text-center py-12 text-gray-400">
+                <div className="text-center py-12 text-gray-500">
                   No bookings found.
                 </div>
               )}
             </div>
           </div>
         )}
       </div>