public without sharing class RecentlyViewedObjController {
    
    @AuraEnabled
    public static SObject RecentlyViewed() {
        return [SELECT Id, Type FROM RecentlyViewed WHERE Type IN ('Account', 'Contact', 'Opportunity') ORDER BY LastViewedDate DESC Limit 1];        
    }
}