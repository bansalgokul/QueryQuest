/* Generated by restful-react */

import {
  Get,
  GetProps,
  useGet,
  UseGetProps,
  Mutate,
  MutateProps,
  useMutate,
  UseMutateProps,
} from "restful-react";
export const SPEC_VERSION = "v0";
export interface ColumnData {
  columnName?: string;
  value?: string;
}

/**
 * Question to create
 */
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
  /**
   * Page number
   */
  page?: number;
  /**
   * Page size
   */
  size?: number;
}

export type GetAllQuestionsProps = Omit<
  GetProps<PageQuestion, unknown, GetAllQuestionsQueryParams, void>,
  "path"
>;

/**
 * Get all questions
 *
 * Returns a paginated list of all questions
 */
export const GetAllQuestions = (props: GetAllQuestionsProps) => (
  <Get<PageQuestion, unknown, GetAllQuestionsQueryParams, void>
    path={`/questions`}
    {...props}
  />
);

export type UseGetAllQuestionsProps = Omit<
  UseGetProps<PageQuestion, unknown, GetAllQuestionsQueryParams, void>,
  "path"
>;

/**
 * Get all questions
 *
 * Returns a paginated list of all questions
 */
export const useGetAllQuestions = (props: UseGetAllQuestionsProps) =>
  useGet<PageQuestion, unknown, GetAllQuestionsQueryParams, void>(
    `/questions`,
    props
  );

export type CreateQuestionProps = Omit<
  MutateProps<Question, unknown, void, Question, void>,
  "path" | "verb"
>;

/**
 * Create a new question
 *
 * Creates a new question and returns the created object
 */
export const CreateQuestion = (props: CreateQuestionProps) => (
  <Mutate<Question, unknown, void, Question, void>
    verb="POST"
    path={`/questions`}
    {...props}
  />
);

export type UseCreateQuestionProps = Omit<
  UseMutateProps<Question, unknown, void, Question, void>,
  "path" | "verb"
>;

/**
 * Create a new question
 *
 * Creates a new question and returns the created object
 */
export const useCreateQuestion = (props: UseCreateQuestionProps) =>
  useMutate<Question, unknown, void, Question, void>(
    "POST",
    `/questions`,
    props
  );

export type GetUserInfoProps = Omit<
  GetProps<User, unknown, void, void>,
  "path"
>;

export const GetUserInfo = (props: GetUserInfoProps) => (
  <Get<User, unknown, void, void> path={`/auth/user`} {...props} />
);

export type UseGetUserInfoProps = Omit<
  UseGetProps<User, unknown, void, void>,
  "path"
>;

export const useGetUserInfo = (props: UseGetUserInfoProps) =>
  useGet<User, unknown, void, void>(`/auth/user`, props);
