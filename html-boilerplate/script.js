function configureDropDownLists(ddl1, ddl2){  
    var push = ['bench press', 'overhead press', 'incline dumbbell press', 'triceps push downs', 'lateral raises', 'overhead tricep extensions'];
    var pull = ['deadlift', 'pull-up','hammer curls', 'dumbbell curls', 'seated cable row', 'facepulls'];
    var legs = ['dumbbell squat', 'leg press', 'leg curls', 'calf raises'];
    var howvar = ['how you gain']
    switch (ddl1.value){
        case 'routines':
            ddl2.options.length = 0;
            for (i = 0; i < routines.length; i++) {
                createOption(ddl2, routines[i], routines[i]);
            }
            break;
        case 'push':
            ddl2.options.length = 0;
            for (i = 0; i< push.length; i++){
                createOption(ddl2, push[i], push[i]);
            }
            break;
        case 'pull':
            ddl2.options.length = 0;
            for (i = 0; i < pull.length; i++){
                createOption(ddl2, pull[i], pull[i]);
            }
            break;
        case 'legs':
            ddl2.options.length = 0;
            for (i=0; i < legs.length; i++){
                createOption(ddl2, legs[i], legs[i]);
            }
            break;
        case 'howyougain' :
            ddl2.options.length = 0;
            for (i = 0; i < howvar.length; i++) {
                createOption(ddl2, howvar[i], howvar[i]);
            }
            break;
        default:
            ddl2.options.length = 0;
            break;
        }

}

function createOption(ddl, text, value) {
    var opt = document.createElement('option');
    opt.value = value;
    opt.text = text;
    ddl.options.add(opt);
}

