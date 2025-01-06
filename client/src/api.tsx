import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Interfaces for API responses and payloads
export interface ColumnData {
  columnName?: string;
  value?: string;
}

export interface Question {
  id?: string;
  title?: string;
  description?: string;
  tables?: TableEntity[];
  output?: TableEntity;
  expectedQuery?: string;
  difficulty?: "EASY" | "MEDIUM" | "HARD";
  category?: "AGGREGATE" | "JOINS" | "SUBQUERIES" | "FUNCTIONS" | "INDEXING";
  tags?: string[];
  hint?: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface RowEntity {
  columns?: ColumnData[];
}

export interface TableEntity {
  tableName?: string;
  rows?: RowEntity[];
}

export interface PageQuestion {
  totalElements?: number;
  totalPages?: number;
  first?: boolean;
  last?: boolean;
  size?: number;
  content?: Question[];
  number?: number;
  sort?: SortObject;
  numberOfElements?: number;
  pageable?: PageableObject;
  empty?: boolean;
}

export interface PageableObject {
  offset?: number;
  sort?: SortObject;
  paged?: boolean;
  pageNumber?: number;
  pageSize?: number;
  unpaged?: boolean;
}

export interface SortObject {
  empty?: boolean;
  unsorted?: boolean;
  sorted?: boolean;
}

export interface User {
  id?: string;
  name?: string;
  email?: string;
  role?: "USER" | "ADMIN";
  source?: "GOOGLE" | "GITHUB";
}

export interface GetAllQuestionsQueryParams {
  page?: number;
  size?: number;
}

// API fetchers
const fetchUserInfo = async (): Promise<User> => {
  const response = await api.get<User>("/auth/user");
  return response.data;
};

const fetchAllQuestions = async (
  params?: GetAllQuestionsQueryParams
): Promise<PageQuestion> => {
  const response = await api.get<PageQuestion>("/questions", { params });
  return response.data;
};

const createQuestion = async (question: Question): Promise<Question> => {
  const response = await api.post<Question>("/questions", question);
  return response.data;
};

// React Query hooks
export const useGetUserInfo = (options?: UseQueryOptions<User, unknown>) => {
  return useQuery<User, unknown>({
    queryKey: ["userInfo"],
    queryFn: fetchUserInfo,
    retry: 1,
    ...options,
  });
};

export const useGetAllQuestions = (
  params?: GetAllQuestionsQueryParams,
  options?: UseQueryOptions<PageQuestion, unknown>
) => {
  return useQuery<PageQuestion, unknown>({
    queryKey: ["allQuestions", params],
    queryFn: () => fetchAllQuestions(params),
    retry: 1,
    ...options,
  });
};

export const useCreateQuestion = (
  options?: UseMutationOptions<Question, unknown, Question>
) => {
  return useMutation<Question, unknown, Question>({
    mutationFn: createQuestion,
    retry: 1,
    ...options,
  });
};
