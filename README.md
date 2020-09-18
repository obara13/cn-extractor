# Company Name Extractor

This Web App extract the company name from excel file.
(Japanese only)

## Project setup
Create `.env` file for docker compose. Like below.
```
http_proxy=(proxy url)  # if needed.
https_proxy=(proxy url)  # if needed.
```

Then, run docker compose.
```
docker-compose up
```

## How to use
Access to http://localhost:3000/

## Project shutdown

Press `CTRL+C` to quit, and stop docker compose.
```
docker-compose down
```


# Related Project

Japanese Company Lexicon (JCLdic): https://github.com/chakki-works/Japanese-Company-Lexicon
