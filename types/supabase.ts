export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      alert_configs: {
        Row: {
          alert_type: string
          created_at: string | null
          id: string
          is_active: boolean | null
          notification_email: string | null
          threshold: number
        }
        Insert: {
          alert_type: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          notification_email?: string | null
          threshold: number
        }
        Update: {
          alert_type?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          notification_email?: string | null
          threshold?: number
        }
        Relationships: []
      }
      alert_history: {
        Row: {
          alert_config_id: string | null
          id: string
          message: string | null
          triggered_at: string | null
          value: number | null
        }
        Insert: {
          alert_config_id?: string | null
          id?: string
          message?: string | null
          triggered_at?: string | null
          value?: number | null
        }
        Update: {
          alert_config_id?: string | null
          id?: string
          message?: string | null
          triggered_at?: string | null
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "alert_history_alert_config_id_fkey"
            columns: ["alert_config_id"]
            referencedRelation: "alert_configs"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_count: {
        Row: {
          count: number
          date: string
          id: number
        }
        Insert: {
          count?: number
          date: string
          id?: never
        }
        Update: {
          count?: number
          date?: string
          id?: never
        }
        Relationships: []
      }
      daily_stats: {
        Row: {
          active_users: number | null
          avg_session_duration: number | null
          date: string
          new_users: number | null
          page_views: Json | null
          total_sessions: number | null
          total_users: number | null
        }
        Insert: {
          active_users?: number | null
          avg_session_duration?: number | null
          date: string
          new_users?: number | null
          page_views?: Json | null
          total_sessions?: number | null
          total_users?: number | null
        }
        Update: {
          active_users?: number | null
          avg_session_duration?: number | null
          date?: string
          new_users?: number | null
          page_views?: Json | null
          total_sessions?: number | null
          total_users?: number | null
        }
        Relationships: []
      }
      user_events: {
        Row: {
          created_at: string | null
          event_type: string
          id: string
          metadata: Json | null
          page_path: string | null
          session_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          event_type: string
          id?: string
          metadata?: Json | null
          page_path?: string | null
          session_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          event_type?: string
          id?: string
          metadata?: Json | null
          page_path?: string | null
          session_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          duration_seconds: number | null
          ended_at: string | null
          id: string
          is_active: boolean | null
          started_at: string | null
          user_id: string
        }
        Insert: {
          duration_seconds?: number | null
          ended_at?: string | null
          id: string
          is_active?: boolean | null
          started_at?: string | null
          user_id: string
        }
        Update: {
          duration_seconds?: number | null
          ended_at?: string | null
          id?: string
          is_active?: boolean | null
          started_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      waiting_list: {
        Row: {
          email: string
          id: number
          request_time: string | null
        }
        Insert: {
          email: string
          id?: never
          request_time?: string | null
        }
        Update: {
          email?: string
          id?: never
          request_time?: string | null
        }
        Relationships: []
      }
      response_cache: {
        Row: {
          id: string
          cache_key: string
          response_data: Json
          created_at: string
          expires_at: string | null
          hit_count: number
        }
        Insert: {
          id?: string
          cache_key: string
          response_data: Json
          created_at?: string
          expires_at?: string | null
          hit_count?: number
        }
        Update: {
          id?: string
          cache_key?: string
          response_data?: Json
          created_at?: string
          expires_at?: string | null
          hit_count?: number
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          id: string
          email: string | null
          name: string | null
          created_at: string
          last_login: string | null
          is_active: boolean
        }
        Insert: {
          id: string
          email?: string | null
          name?: string | null
          created_at?: string
          last_login?: string | null
          is_active?: boolean
        }
        Update: {
          id?: string
          email?: string | null
          name?: string | null
          created_at?: string
          last_login?: string | null
          is_active?: boolean
        }
        Relationships: []
      }
      feedback: {
        Row: {
          id: string
          user_id: string | null
          page_path: string | null
          rating: number | null
          comment: string | null
          created_at: string
          metadata: Json | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          page_path?: string | null
          rating?: number | null
          comment?: string | null
          created_at?: string
          metadata?: Json | null
        }
        Update: {
          id?: string
          user_id?: string | null
          page_path?: string | null
          rating?: number | null
          comment?: string | null
          created_at?: string
          metadata?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_daily_stats: {
        Args: {
          start_date: string
          end_date: string
        }
        Returns: {
          date: string
          total_users: number
          active_users: number
          new_users: number
          total_sessions: number
          avg_session_duration: number
          page_views: Json
        }[]
      }
      get_user_stats: {
        Args: {
          days: number
        }
        Returns: {
          total_users: number
          active_users: number
          new_users: number
        }[]
      }
      cleanup_expired_cache: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    ? (Database["public"]["Tables"] & Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends keyof Database["public"]["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof Database["public"]["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends keyof Database["public"]["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never
