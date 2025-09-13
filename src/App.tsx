@@ .. @@
-  return (
-    <div className="min-h-screen bg-gray-900 text-white">
-      <Router>
-        <Routes>
-          <Route path="/" element={<Home />} />
-          <Route path="/booking" element={<Booking />} />
-          <Route path="/admin" element={<Admin />} />
-        </Routes>
-      </Router>
-    </div>
-  );
+  return (
+    <div className="min-h-screen bg-gray-50 text-gray-900">
+      <Router>
+        <Routes>
+          <Route path="/" element={<Home />} />
+          <Route path="/booking" element={<Booking />} />
+          <Route path="/admin" element={<Admin />} />
+        </Routes>
+      </Router>
+    </div>
+  );