count=$(find . -mindepth 1 -maxdepth 1 -type f -o -type d | wc -l)
echo $count
