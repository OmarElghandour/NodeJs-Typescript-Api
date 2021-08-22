"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RouterController_1 = require("./RouterController");
class AuthenticationRouter extends RouterController_1.RouterController {
    constructor(app) {
        super(app, 'Authentication');
    }
    configureRoutes() {
        this.app.route(`/login`)
            .get((req, res) => {
            res.status(200).send(`List of users`);
        })
            .post((req, res) => {
            res.status(200).send(`Post to users`);
        });
        return this.app;
    }
}
exports.default = AuthenticationRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aGVudGljYXRpb25Sb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBdXRoZW50aWNhdGlvblJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlEQUFvRDtBQUdwRCxNQUFxQixvQkFBcUIsU0FBUSxtQ0FBZ0I7SUFFOUQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDdkIsR0FBRyxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFFcEIsQ0FBQztDQUNKO0FBbEJELHVDQWtCQyJ9