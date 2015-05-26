function createElements(stage) {
  var boat;
  var enemy_boat;

  for(var node in map_data){
    var node_type = map_data[node].type;

    if(node_type == "6"){
      stage.insert(new Q.NodeEnd({x:map_data[node].x, y:map_data[node].y}));
    }else {
      stage.insert(new Q.Node({x:map_data[node].x, y:map_data[node].y}));
    }

    if(node_type == "1"){
      //boat = stage.insert(new Q.Boat({x:map_data[node].x, y:map_data[node].y, actualNode:node}));
      boat = new Q.Boat({x:map_data[node].x, y:map_data[node].y, actualNode:node});
    }else if(node_type == "2"){
      //barco enemigo
      enemy_boat = new Q.EBoat({x:map_data[node].x, y:map_data[node].y, actualNode:node});
    }else if(node_type == "3"){
      stage.insert(new Q.Crocodile({x:map_data[node].x, y:map_data[node].y}));
    }else if(node_type == "4"){
      stage.insert(new Q.Sword({x:map_data[node].x, y:map_data[node].y}));
    }else if(node_type == "5"){
      //objeto de valor para los puntos
    }
  }
  stage.insert(enemy_boat);
  return boat;
}
