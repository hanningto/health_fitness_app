export const workoutLogSchema = {
    user_id: {
        notEmpty: {
            errorMessage: "Please provide a user id"
        }
    },
    type: {
        notEmpty: {
            errorMessage: "Please Provide a workout type"
        },
        isString: {
            errorMessage: "Workout type must be a string"
        }
    },
    duration: {
        isInt: {
            errorMessage: " duration must be a positive number"
        },
        notEmpty: {
            errorMessage: "Please provide a duration"
        }
    },
    notes: {
        notEmpty: {
            errorMessage: "please provide a workout note"
        },
        isString: {
            errorMessage: "Notes must be strings"
        }
    }
}