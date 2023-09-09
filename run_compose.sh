docker compose up -d
sleep 10
docker exec "cars-drf-api-api-1" python manage.py makemigrations
docker exec "cars-drf-api-api-1" python manage.py migrate