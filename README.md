# Nickel City Baseball League - Free Website

This is a complete static website designed for free hosting on GitHub Pages.

## What works
- Mobile-friendly league website
- 9 team directory
- Schedule page
- Results page
- Automatic standings calculated from final scores
- Field directory
- Official rules page + PDF rulebook
- About and Contact pages
- Optional Google Sheets data connection

## The easy update model
The website reads Teams, Games and Fields from CSV files. You can run it with the included local CSV files, or connect the three tabs to published Google Sheets CSV URLs in `assets/js/config.js`. Once connected, you update the Google Sheet and the website updates automatically.

See `START-HERE.txt` for beginner deployment steps.
