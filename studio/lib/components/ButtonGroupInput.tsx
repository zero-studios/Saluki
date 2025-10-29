import React from 'react'
import { Flex, Box, Stack, useTheme } from '@sanity/ui'
import { set, unset } from 'sanity'
import type { StringInputProps } from 'sanity'

type ListOption = string | { title: string; value: string }

export function ButtonGroupInput(props: StringInputProps) {
  const { value, onChange, schemaType } = props
  const options = schemaType.options?.list as ListOption[] | undefined
  const theme = useTheme()
  const isDark = theme.sanity.color.dark

  if (!options || options.length === 0) {
    return null
  }

  // Normalize options to always have title and value
  const normalizedOptions = options.map((option) => {
    if (typeof option === 'string') {
      return { title: option, value: option }
    }
    return option
  })

  const handleChange = React.useCallback(
    (optionValue: string) => {
      onChange(optionValue ? set(optionValue) : unset())
    },
    [onChange]
  )

  // Theme-aware colors
  const colors = {
    container: isDark ? '#1a1d23' : '#f1f3f6',
    selectedBg: isDark ? '#2a2f38' : '#ffffff',
    selectedText: isDark ? '#ffffff' : '#101112',
    unselectedText: isDark ? '#878d96' : '#70757d',
    hoverBg: isDark ? '#23272e' : '#e8eaed',
    hoverText: isDark ? '#ffffff' : '#101112',
    selectedShadow: isDark 
      ? '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
      : '0 1px 2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.06)',
    focusRing: 'rgba(34, 118, 252, 0.3)',
  }

  return (
    <Stack space={2}>
      <Flex 
        gap={2} 
        wrap="wrap"
        style={{
          padding: '4px',
          backgroundColor: colors.container,
          borderRadius: '6px',
        }}
      >
        {normalizedOptions.map((option) => {
          const isSelected = value === option.value
          
          return (
            <Box
              key={option.value}
              as="button"
              onClick={() => handleChange(option.value)}
              style={{
                flex: '1 1 auto',
                minWidth: 'fit-content',
                padding: '10px 16px',
                backgroundColor: isSelected ? colors.selectedBg : 'transparent',
                color: isSelected ? colors.selectedText : colors.unselectedText,
                border: 'none',
                borderRadius: '4px',
                boxShadow: isSelected ? colors.selectedShadow : 'none',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                outline: 'none',
                fontFamily: 'inherit',
                fontSize: '13px',
                fontWeight: isSelected ? 600 : 500,
                letterSpacing: '0.01em',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.backgroundColor = colors.hoverBg
                  e.currentTarget.style.color = colors.hoverText
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = colors.unselectedText
                }
              }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = isSelected
                  ? `${colors.selectedShadow}, 0 0 0 3px ${colors.focusRing}`
                  : `0 0 0 3px ${colors.focusRing}`
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = isSelected
                  ? colors.selectedShadow
                  : 'none'
              }}
            >
              {option.title}
            </Box>
          )
        })}
      </Flex>
    </Stack>
  )
}

