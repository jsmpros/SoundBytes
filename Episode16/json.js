/* JavaScript */
/* emplid is a global and added by the script engine manager */
var result = (function () {
	/* Alias long names for convenience */
	var ReflectiveArray = java.lang.reflect.Array;
	var CreateSQL = Packages.PeopleSoft.PeopleCode.Func.CreateSQL;

	/* JSON Result Structure */
	var empl = {
		emplid: emplid,
		effdt: []
	};

	/* Java array to hold select columns from SQL.Fetch */
	var columns = ReflectiveArray.newInstance(java.lang.Class.forName("java.lang.Object"),
		1 /* number of selected columns */);

	var cursor = CreateSQL("SELECT %DateOut(EFFDT) FROM PS_JOB WHERE EMPLID = :1 ORDER BY EFFDT", [emplid]);

	while (cursor.Fetch(columns)) {
		empl.effdt.push(columns[0]);
	}

	return JSON.stringify(empl);
}());