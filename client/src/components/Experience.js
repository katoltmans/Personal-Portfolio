import React from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const Experience = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <a id="experience">
            <Box sx={{ p: 1, pt: 5 }}>
                <Typography
                    variant="h3"
                    sx={{
                        color: "#5ce2e2",
                        mt: 5,
                        fontWeight: "bold",
                        textShadow:
                            "1px 1px 1px #919191, 1px 2px 1px #919191,1px 3px 1px #919191",
                    }}
                >
                    Work Experience
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: "#919191",
                        fontWeight: "bold",
                    }}
                >
                    (Prior to Coding Dojo bootcamp)
                </Typography>
                <Box sx={{ textAlign: "left" }}>
                    <Timeline position={matches ? "alternate" : "right"}>
                        <TimelineItem>
                            <TimelineOppositeContent
                                display={matches ? "flex" : "none"}
                            />
                            <TimelineSeparator>
                                <TimelineDot
                                    variant="outlined"
                                    sx={{ bgcolor: "#5ce2e2" }}
                                />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="span">
                                    5th Grade Teacher <br />
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    component="span"
                                    sx={{
                                        color: "#00b0ba",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Renaissance Charter School at Crown Point |
                                    Ocoee, FL | July 2020 - May 2021
                                </Typography>
                                <ul>
                                    <li>
                                        Utilized the Schoology learning
                                        management system to create and
                                        implement an online learning curriculum
                                        from scratch while teaching 41 students
                                        remotely
                                    </li>
                                    <li>
                                        Used Microsoft Excel to create a
                                        progress tracking tool for students that
                                        helped students independently track
                                        their quarterly progress and highlighted
                                        opportunities to rework assignments.
                                    </li>
                                    <li>
                                        Ran daily zoom meetings to instruct
                                        students and assess their progress
                                    </li>
                                </ul>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                display={matches ? "flex" : "none"}
                            />
                            <TimelineSeparator>
                                <TimelineDot
                                    variant="outlined"
                                    sx={{ bgcolor: "#5ce2e2" }}
                                />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="span">
                                    6th Grade Math Teacher <br />
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    component="span"
                                    sx={{
                                        color: "#00b0ba",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Renaissance Charter School at Crown Point |
                                    Ocoee, FL | July 2018 - July 2020
                                </Typography>
                                <ul style={{ textAlign: "left" }}>
                                    <li>
                                        Managed 125+ students, ensuring progress
                                        towards meeting Florida state standards
                                    </li>
                                    <li>
                                        Planned curriculum to ensure deadlines
                                        were met to guarantee all required
                                        standards were covered for the school
                                        year
                                    </li>
                                    <li>
                                        Engaged in regular communication with
                                        school administration, parents, and
                                        students to analyze progress and create
                                        plans to drive success of students in my
                                        class, raising the percentage pass rate
                                        by 6 points from the previous pass rate
                                        of the same students in 5th grade
                                    </li>
                                </ul>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                display={matches ? "flex" : "none"}
                            />
                            <TimelineSeparator>
                                <TimelineDot
                                    variant="outlined"
                                    sx={{ bgcolor: "#5ce2e2" }}
                                />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="span">
                                    Group Fitness Instructor <br />
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    component="span"
                                    sx={{
                                        color: "#00b0ba",
                                        fontWeight: "bold",
                                    }}
                                >
                                    24 Hour Fitness, Castle Rock Rec Center,
                                    True Fit, Haka | FL and CO | June 2013 - Nov
                                    2018
                                </Typography>
                                <ul>
                                    <li>
                                        Created and moderated the 24 Hour
                                        Fitness Central Florida Instructors
                                        facebook group to foster communication
                                        between GX instructors and ease the
                                        process of finding subs
                                    </li>
                                    <li>
                                        Taught a Dance And Sculpt class of my
                                        own creation that grew much interest and
                                        participation at Castle Rock Rec Center
                                    </li>
                                    <li>
                                        Co-created a week-long fitness camp for
                                        kids ages 3 - 12, and organized a
                                        National Dance Day event at Haka! Group
                                        Fitness.
                                    </li>
                                </ul>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                display={matches ? "flex" : "none"}
                            />
                            <TimelineSeparator>
                                <TimelineDot
                                    variant="outlined"
                                    sx={{ bgcolor: "#5ce2e2" }}
                                />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="span">
                                    6th Grade Teacher <br />
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    component="span"
                                    sx={{
                                        color: "#00b0ba",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Front Range Christian School | Littleton, CO
                                    | Aug 2002 - May 2005
                                </Typography>
                                <ul style={{ textAlign: "left" }}>
                                    <li>
                                        Communicated regularly with parents,
                                        recognizing they were my main clientele,
                                        to partner in providing the best
                                        education possible for their children
                                    </li>
                                    <li>
                                        Creatively engaged students with
                                        original lessons including museum
                                        exhibits, debates, simulations, etc.
                                    </li>
                                </ul>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent
                                display={matches ? "flex" : "none"}
                            />
                            <TimelineSeparator>
                                <TimelineDot
                                    variant="outlined"
                                    sx={{ bgcolor: "#5ce2e2" }}
                                />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" component="span">
                                    6th Grade Teacher <br />
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    component="span"
                                    sx={{
                                        color: "#00b0ba",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Lasley Elementary School | Lakewood, CO |
                                    Aug 2001 - June 2002
                                </Typography>
                                <ul>
                                    <li>
                                        Worked closely in a team of four
                                        teachers to plan and ensure student
                                        learning objectives were met
                                    </li>
                                    <li>
                                        Wrote and produced a child's version of
                                        "A Midsummer Night's Dream" for my
                                        struggling readers to pique interest in
                                        reading
                                    </li>
                                </ul>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Box>
            </Box>
        </a>
    );
};

export default Experience;
