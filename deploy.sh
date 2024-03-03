rm -r  ./build
npm run build;

mv dist build;

npm run deploy;
rm -r dist;