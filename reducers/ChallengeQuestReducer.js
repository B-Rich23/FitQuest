import { START_QUEST, SET_LOCATION, PUSH_SPEED_TIME } from '../actions/types';

const INITIAL_STATE = {
	speed: [], 
	timestamp: [], 
	latitude: 37.871732795815525,
	longitude: -122.27066792384305, 
	started: false, 
	stopped: false
};

export default(state = INITIAL_STATE, action) =>{
	switch(action.type){
		case START_QUEST:
			return {...state, "started": action.payload }; 
		case SET_LOCATION: 
			const { lat, long } = action.payload;
			return {...state, "latitude": lat, "longitude": long}
		case PUSH_SPEED_TIME: 
			const {  speed, timestamp } = action.payload;
			return {...state, 
					"speed": [...state.speed, speed], 
					"timestamp": [...state.timestamp, timestamp]
				   } 
		default: 
			return state; 
	}
}