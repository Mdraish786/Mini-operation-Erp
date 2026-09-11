require('dotenv').config();
const app = require('./src/app');
const { initDb } = require('./src/config/database');

const PORT = process.env.PORT || 5000;

try {
  initDb();
  app.listen(PORT, () => {
    console.log(`\n🚀 Server running at http://localhost:${PORT}`);
    console.log(`📄 API Docs: http://localhost:${PORT}/api-docs`);
    console.log(`\n  Run 'npm run seed' to populate sample data\n`);
  });
} catch (err) {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
}
