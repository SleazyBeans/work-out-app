const push = ['bench press', 'overhead press', 'incline dumbbell press', 'triceps push downs', 'lateral raises', 'overhead tricep extensions'];
    const pull = ['deadlift', 'pull-up','hammer curls', 'dumbbell curls', 'seated cable row', 'facepulls'];
    const legs = ['dumbbell squat', 'leg press', 'leg curls', 'calf raises'];
    const howvar = ['how you gain']

    const workoutSelect = document.getElementById('ddl');
    const routineSelect = document.getElementById('ddl2');
    workoutSelect.addEventListener('select',() => {
        configureDropDownLists(workoutSelect, routineSelect);});
    
const routines = new Map();
routines.set('push', push);
routines.set('pull', pull);
routines.set('legs', legs);



function configureDropDownLists(ddl, ddl2){  
    ddl2.options.length = 0;

    const routine = routines.get(ddl.value)
    for (i = 0; i < routine.length; i++) {
        createOption(ddl2, routine[i], routine[i])
    }
}

