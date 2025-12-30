NAME = portfolio
DOCKER_COMPOSE_FILE = docker-compose.yml
DOCKER_COMPOSE = docker compose -f $(DOCKER_COMPOSE_FILE) -p $(NAME)

all:
	$(DOCKER_COMPOSE) up -d --build

build_up:
	$(DOCKER_COMPOSE) up --build

build_up_d:
	$(DOCKER_COMPOSE) up --build -d

build:
	$(DOCKER_COMPOSE) build

down:
	$(DOCKER_COMPOSE) down

clean:
	$(DOCKER_COMPOSE) down
	$(DOCKER_COMPOSE) rm -f
	docker volume rm $(shell docker volume ls -q)

fclean:
	$(DOCKER_COMPOSE) down
	$(DOCKER_COMPOSE) rm -f
	@if [ -n "$(shell docker volume ls -q)" ]; then \
		docker volume rm $(shell docker volume ls -q); \
	fi
	@if [ -n "$(shell docker images -q)" ]; then \
		docker rmi -f $(shell docker images -q); \
	fi
	docker system prune -af


re: fclean build_up
