({
    myAction : function(cmp) {
        var action = cmp.get("c.RecentlyViewed");

        action.setCallback(this, function(response) {
            var state = response.getState();

            if (state === "SUCCESS") {
                alert("From server: " + response.getReturnValue());
                cmp.set('v.sObjId', response.getReturnValue().Id);
                cmp.set('v.sObjType', response.getReturnValue().Type);
            }
            else if (state === "INCOMPLETE") {

            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        }); 

        $A.enqueueAction(action);
    }

})