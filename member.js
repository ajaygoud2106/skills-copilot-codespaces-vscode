function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modukes/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope : {
            'member' : '='
        }
    };
}