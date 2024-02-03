if [ $# -eq 0 ]; then
    echo "Usage: $0 <arg1> [arg2] [arg3]"
    exit 1
fi

echo "$1"

if [ $# -ge 2 ]; then
    echo "$2"
fi

if [ $# -ge 3 ]; then
    echo "$3"
fi
