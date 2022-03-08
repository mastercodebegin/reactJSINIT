import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {history} from './history';
import  Login  from '../components/login/login';
import Register from '../components/registeruser/registeruser';
import Dashboard from '../components/dashboard/dashboard';
import HrDashboard from '../components/hrdashboard/hrdashboard';
import Holidays from '../components/holidays/holidays';
import MyProfile from '../components/myprofile/myprofile';
import TimeLog from '../components/time-log/timelog';
import StandUp from '../components/standup/standup';
import Birthday from '../components/birthday/birthday';
import Event from '../components/events/events';
import LeaveModule from '../components/leave/leave';
import Users from '../components/users/users';
import AllTasks from '../components/alltasks/alltasks';
import ReviewTimelog from '../components/reviewtimelog/reviewtimelog';
import LeaveRequests from '../components/leaverequests/leaverequests';
import MyReportees from '../components/myreportees/myreportees';
import SearchLeave from '../components/searchleave/searchleave';
import ProjectManagement from '../components/projectmanagement/projectmanagement';
import TeamManagement from '../components/teammanagement/teamanagement';
import TimelogExport from '../components/timelogexport/timelogexport';
import LocationManagement from '../components/locationmanagement/locationmanagement';
import ProjectAllocation from '../components/projectallocation/projectallocation';
const AppRoutes = () => (
    <Router history={history}>
                            <Switch>
                                {/* <PrivateRoute exact path="/" component={HomePage} /> */}
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={Register} />
                                <Route path="/dashboard" component={Dashboard}/>
                                <Route path="/hrdashboard" component={HrDashboard} />
                                <Route path="/holidays" component={Holidays} />
                                <Route path="/myprofile" component={MyProfile} />
                                <Route path="/standup" component={StandUp} />
                                <Route path="/timelogs" component={TimeLog} />
                                <Route path="/birthdays" component={Birthday} />
                                <Route path="/events" component={Event} />
                                <Route path="/leave" component={LeaveModule} />
                                <Route path="/users" component={Users} />
                                <Route path="/alltasks" component={AllTasks} />
                                <Route path="/reviewtimelogs" component={ReviewTimelog} />
                                <Route path="/leaverequests" component={LeaveRequests} />
                                <Route path="/myreportees" component={MyReportees} />
                                <Route path="/searchleave" component={SearchLeave} />
                                <Route path="/projectmanagement" component={ProjectManagement} />
                                <Route path="/teammanagement" component={TeamManagement} />
                                <Route path="/timelogexport" component={TimelogExport} />
                                <Route path="/locationmanagement" component={LocationManagement} />
                                <Route path="/projectallocation" component={ProjectAllocation} />

                                {/* <Route path="/register" component={RegisterPage} /> */}
                                <Redirect exact path="/" to="/login" />
                            </Switch>
                        </Router>

);  
 
export default AppRoutes;
