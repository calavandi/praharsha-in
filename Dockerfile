FROM ruby:3.1-slim

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /site

# Install bundler
RUN gem install bundler:2.4.22

# Expose port
EXPOSE 4000

# Entrypoint script to install gems and start server
CMD ["sh", "-c", "bundle install && bundle exec jekyll serve --host 0.0.0.0 --livereload --force_polling"]
