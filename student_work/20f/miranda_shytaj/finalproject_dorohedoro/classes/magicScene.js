class MagicScene extends MapScene {
	constructor(){
		super();

		this.background.push(new Portal("Enter the South Zagan Magical Training School", trainingSchool, 200, height / 2 - 120, schoolScene, 1));
		this.background.push(new Portal("Enter the Turkey's House", turkeyHouse, 700, height / 2 - 90, turkeyHouseScene, 2));
		this.background.push(new Portal("Enter the En's Mansion", enMansion, 1100, height / 2 - 140, enScene, 3));
	}


}
