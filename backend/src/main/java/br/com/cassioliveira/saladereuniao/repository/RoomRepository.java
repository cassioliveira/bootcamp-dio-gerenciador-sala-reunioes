package br.com.cassioliveira.saladereuniao.repository;

import br.com.cassioliveira.saladereuniao.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
