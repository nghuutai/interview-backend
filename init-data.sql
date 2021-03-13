CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE public.user (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.department (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  management_by uuid NOT NULL,
  FOREIGN KEY (management_by) REFERENCES public.user(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.team (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  department_id uuid NOT NULL,
  FOREIGN KEY (department_id) REFERENCES public.department(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE public.user_team (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id uuid NOT NULL,
  team_id uuid NOT NULL,
  FOREIGN KEY (user_id) REFERENCES public.user(id),
  FOREIGN KEY (team_id) REFERENCES public.team(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO public.user
VALUES (uuid_generate_v4(), 'Nguyen Huu Tai', 'director'),
       (uuid_generate_v4(), 'Nguyen Huu Tai 1', 'manager'),
       (uuid_generate_v4(), 'Nguyen Huu Tai 2', 'manager'),
       (uuid_generate_v4(), 'Nguyen Huu Tai 3', 'employee'),
       (uuid_generate_v4(), 'Nguyen Huu Tai 4', 'employee'),
       (uuid_generate_v4(), 'Nguyen Huu Tai 5', 'employee'),
       (uuid_generate_v4(), 'Nguyen Huu Tai 6', 'employee'),
       (uuid_generate_v4(), 'Nguyen Huu Tai 7', 'employee');
