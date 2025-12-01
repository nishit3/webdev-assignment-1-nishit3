"use client";

export default function EnvTest() {
  const server = process.env.NEXT_PUBLIC_HTTP_SERVER;
  
  return (
    <div style={{ padding: "20px" }}>
      <h1>Environment Variable Test</h1>
      <p><strong>NEXT_PUBLIC_HTTP_SERVER:</strong> {server || "NOT SET!"}</p>
      <p><strong>Expected for local dev:</strong> http://localhost:4000</p>
      <p><strong>Expected for production:</strong> https://kambaz-node-server-a6.onrender.com</p>
      
      {server === "http://localhost:4000" && (
        <div style={{ color: "green", fontWeight: "bold" }}>✅ Correct! Using localhost</div>
      )}
      
      {server?.includes("render") && (
        <div style={{ color: "red", fontWeight: "bold" }}>❌ Wrong! Using Render in dev mode</div>
      )}
    </div>
  );
}
