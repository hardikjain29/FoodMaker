export function addIngredient(ing) {
  return {
    type: 'ADD_INGREDIENTS',
    ing
  }
}

export function requestLoad() {
  return {
    type: 'REQUEST_LOAD'
  }
}

export function stopLoad() {
  return {
    type: 'STOP_LOAD'
  }
}

export function receiveLoad(data) {
  return {
    type: 'RECEIVE_LOAD',
    data
  }
}

export function deleteIngredient(index) {
  return {
    type: 'DELETE_INGREDIENT',
    index
  }
}


export function startLoad(ingredients) {
  return (dispatch, getState) => {
  		dispatch(requestLoad());
        loadApi(ingredients)
            .then(data => {
            	dispatch(stopLoad());
            	return dispatch(receiveLoad(data))
            });
    }
}

function loadApi(ingredients) {
    return new Promise((resolve, reject) => {
    	var query = '';
        for(var i = 0;i<ingredients.length;i++)
        {
        	if (i!=ingredients.length-1) {
        		query = query + ingredients[i].ingredients +',';
        	}
        	else{
        		query = query + ingredients[i].ingredients;
        	}
        }

            var url = "https://api.edamam.com/search?q="+query+"&to=6&app_id=c54567b5&app_key=f16ff859f627b2fba782f6cb8065d06b&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free";
        resolve(
            $.ajax({
                    type: "GET",
                    dataType: 'jsonp',
                    cache: false,
                    crossDomain:true,
                    url: url,
                    success: function (data) {
                    	return data
                    }
                })

        	);
    });
}