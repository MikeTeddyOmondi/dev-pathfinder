"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Search,
  BookOpen,
  Code,
  Users,
  Calendar,
  Trophy,
  Star,
} from "lucide-react";
import Link from "next/link";

type Resource = {
  topic: string;
  site: string;
};

type LearningPath = {
  title: string;
  skills: string[];
  resources: Resource[];
};

type LearningPaths = {
  frontend: LearningPath;
  backend: LearningPath;
  devops: LearningPath;
};

export default function Dashboard() {
  const [selectedPath, setSelectedPath] =
    useState<keyof LearningPaths>("frontend");

  const learningPaths: LearningPaths = {
    frontend: {
      title: "Frontend Development",
      skills: ["HTML/CSS", "JavaScript", "React", "Vue", "Angular"],
      resources: [
        { topic: "MDN Docs", site: "https://developer.mozilla.org/en-US/" },
        {
          topic: "Frontend Masters",
          site: "https://developer.mozilla.org/en-US/",
        },
        { topic: "CSS Tricks", site: "https://developer.mozilla.org/en-US/" },
      ],
    },
    backend: {
      title: "Backend Development",
      skills: ["Node.js", "Python", "Java", "Databases", "APIs"],
      resources: [
        { topic: "Node Docs", site: "https://developer.mozilla.org/en-US/" },
        {
          topic: "Django Project",
          site: "https://www.djangoproject.com/",
        },
        { topic: "Spring.io", site: "https://spring.io/" },
      ],
    },
    devops: {
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Monitoring"],
      resources: [
        { topic: "Docker Docs", site: "https://developer.mozilla.org/en-US/" },
        { topic: "Kubernetes", site: "https://developer.mozilla.org/en-US/" },
        { topic: "AWS Guides", site: "https://developer.mozilla.org/en-US/" },
      ],
    },
  };

  return (
    <div className='w-full max-w-6xl mx-auto p-4 space-y-6'>
      {/* Header Section */}
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>DevPathfinder</h1>
        <div className='flex items-center gap-4'>
          <Search className='w-5 h-5' />
          <Users className='w-5 h-5' />
        </div>
      </div>

      {/* Main Navigation */}
      <Tabs defaultValue='learning' className='w-full'>
        <TabsList className='grid w-full grid-cols-4'>
          <TabsTrigger value='learning'>Learning Path</TabsTrigger>
          <TabsTrigger value='practice'>Practice Arena</TabsTrigger>
          <TabsTrigger value='mentorship'>Mentorship</TabsTrigger>
          <TabsTrigger value='progress'>Progress Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value='learning' className='space-y-4'>
          {/* Learning Path Selector */}
          <div className='grid grid-cols-3 gap-4'>
            {Object.entries(learningPaths).map(([key, path]) => (
              <Card
                key={key}
                className={`cursor-pointer ${
                  selectedPath === key ? "border-blue-500" : ""
                }`}
                onClick={() => setSelectedPath(key as keyof LearningPaths)}
              >
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <Code className='w-4 h-4' />
                    {path.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className='list-disc pl-4'>
                    {path.skills.slice(0, 3).map((skill) => (
                      <li key={skill} className='text-sm'>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resource Cards */}
          <div className='grid grid-cols-2 gap-4'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <BookOpen className='w-4 h-4' />
                  Learning Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2'>
                  {learningPaths[selectedPath].resources.map((resource) => (
                    <li
                      key={resource.topic}
                      className='flex items-center gap-2'
                    >
                      <Star className='w-4 h-4 text-yellow-500' />
                      <Link href={resource.site}>{resource.topic}</Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Trophy className='w-4 h-4' />
                  Progress Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='flex justify-between'>
                    <span>Current Level</span>
                    <span className='font-bold'>Intermediate</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-600 h-2 rounded-full w-2/3'></div>
                  </div>
                  <div className='flex justify-between text-sm text-gray-600'>
                    <span>Skills Mastered: 12</span>
                    <span>Next Milestone: 15</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Other tab content placeholders */}
        <TabsContent value='practice'>
          <Card>
            <CardContent className='p-4'>
              <p>Practice Arena content goes here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='mentorship'>
          <Card>
            <CardContent className='p-4'>
              <p>Mentorship content goes here</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='progress'>
          <Card>
            <CardContent className='p-4'>
              <p>Progress Tracking content goes here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
