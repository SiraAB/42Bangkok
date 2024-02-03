if [ $# -eq 0 ]; then
    echo "Usage: $0 <folder_name1> [folder_name2] [folder_name3] ..."
    exit 1
fi

for arg in "$@"; do
    folder_name="ex${arg}"
    mkdir "$folder_name"
    echo "Created folder: $folder_name"
done
