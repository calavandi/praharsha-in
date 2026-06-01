#!/bin/bash

# Quick reference commands for Docker

cat << 'EOF'

╔════════════════════════════════════════════════════════════╗
║        PRAHARSHA JEKYLL SITE - DOCKER COMMANDS            ║
╚════════════════════════════════════════════════════════════╝

🚀 START THE SITE:
   ./start.sh
   # Or manually:
   docker-compose up

🛑 STOP THE SITE:
   ./stop.sh
   # Or manually:
   docker-compose down
   # Or: Ctrl+C if running in foreground

🌐 ACCESS THE SITE:
   http://localhost:4000

📝 VIEW LOGS:
   docker-compose logs -f

🔄 RESTART:
   docker-compose restart

🔨 REBUILD (after Gemfile changes):
   docker-compose down
   docker-compose build --no-cache
   docker-compose up

🧹 CLEAN EVERYTHING:
   docker-compose down -v
   docker rmi praharsha-jekyll

💻 ACCESS CONTAINER SHELL:
   docker-compose exec jekyll /bin/bash

📦 BUILD PRODUCTION SITE:
   docker-compose run jekyll bundle exec jekyll build
   # Output will be in _site/ directory

🔍 CHECK RUNNING CONTAINERS:
   docker ps

❓ TROUBLESHOOTING:
   # Port 4000 already in use?
   lsof -ti:4000 | xargs kill -9
   
   # Or change port in docker-compose.yml:
   # ports:
   #   - "4001:4000"

📚 MORE HELP:
   See DOCKER_GUIDE.md for detailed documentation

╔════════════════════════════════════════════════════════════╗
║  QUICK TIP: Edit files normally, see changes instantly!   ║
╚════════════════════════════════════════════════════════════╝

EOF