const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="text-center max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold text-foreground">LM Industrial Suppliers</h1>
        <p className="text-xl text-muted-foreground mb-6">Static Website Ready!</p>
        <div className="bg-muted rounded-lg p-6 text-left">
          <h2 className="font-semibold mb-3">Your static files are in the /public folder:</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• <code className="bg-background px-2 py-1 rounded">public/index.html</code></li>
            <li>• <code className="bg-background px-2 py-1 rounded">public/style.css</code></li>
            <li>• <code className="bg-background px-2 py-1 rounded">public/script.js</code></li>
          </ul>
          <p className="mt-4 text-sm">Download these 3 files and upload them to your GitHub Pages repository root.</p>
          <a 
            href="/index.html" 
            className="inline-block mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition"
          >
            Preview Static Site →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
