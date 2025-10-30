import React from 'react'
import { Stack, Box, Text, Flex, useTheme } from '@sanity/ui'
import { set, unset } from 'sanity'
import type { NumberInputProps } from 'sanity'

export function SliderInput(props: NumberInputProps) {
  const { value, onChange, elementProps, validation } = props
  const { min = 0, max = 100, step = 1, unit = 'px' } = props.schemaType.options || {}
  const initialValue = props.schemaType.initialValue as number | undefined
  const theme = useTheme()
  const isDark = theme.sanity.color.dark

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value ? parseFloat(event.target.value) : undefined
      onChange(nextValue !== undefined ? set(nextValue) : unset())
    },
    [onChange]
  )

  const hasError = validation.some((v) => v.level === 'error')
  const currentValue = value ?? initialValue ?? min
  // Calculate percentage correctly for ranges that don't start at 0
  const range = max - min
  const percentage = ((currentValue - min) / range) * 100

  // Theme-aware colors
  const colors = {
    track: isDark ? '#1a1d23' : '#e1e3e6',
    fill: isDark ? '#4a7bde' : '#2276fc',
    thumb: isDark ? '#ffffff' : '#ffffff',
    thumbBorder: isDark ? '#4a7bde' : '#2276fc',
    thumbShadow: isDark 
      ? '0 2px 6px rgba(0, 0, 0, 0.4)' 
      : '0 2px 4px rgba(0, 0, 0, 0.2)',
    focusRing: 'rgba(34, 118, 252, 0.3)',
    valueBg: isDark ? '#2a2f38' : '#ffffff',
    valueText: isDark ? '#ffffff' : '#101112',
    valueBorder: isDark 
      ? '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      : '0 1px 2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.06)',
    error: '#f03e2f',
  }

  return (
    <Stack space={2}>
      <Flex align="center" justify="space-between" gap={3}>
        <Box flex={1}>
          <input
            {...elementProps}
            type="range"
            min={min}
            max={max}
            step={step}
            value={currentValue}
            onChange={handleChange}
            style={{
              width: '100%',
              height: '6px',
              borderRadius: '3px',
              background: hasError 
                ? `linear-gradient(to right, ${colors.error} 0%, ${colors.error} 100%)`
                : `linear-gradient(to right, ${colors.fill} 0%, ${colors.fill} ${percentage}%, ${colors.track} ${percentage}%, ${colors.track} 100%)`,
              outline: 'none',
              transition: 'background 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              WebkitAppearance: 'none',
              appearance: 'none',
              cursor: 'pointer',
            }}
          />
          <style>
            {`
              input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: ${colors.thumb};
                cursor: pointer;
                box-shadow: ${colors.thumbShadow};
                border: 2px solid ${colors.thumbBorder};
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
              }
              
              input[type="range"]::-moz-range-thumb {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: ${colors.thumb};
                cursor: pointer;
                box-shadow: ${colors.thumbShadow};
                border: 2px solid ${colors.thumbBorder};
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
              }

              input[type="range"]:hover::-webkit-slider-thumb {
                transform: scale(1.1);
              }

              input[type="range"]:hover::-moz-range-thumb {
                transform: scale(1.1);
              }

              input[type="range"]:focus::-webkit-slider-thumb {
                box-shadow: ${colors.thumbShadow}, 0 0 0 3px ${colors.focusRing};
              }

              input[type="range"]:focus::-moz-range-thumb {
                box-shadow: ${colors.thumbShadow}, 0 0 0 3px ${colors.focusRing};
              }
            `}
          </style>
        </Box>
        <Box
          style={{
            minWidth: '56px',
            padding: '8px 12px',
            textAlign: 'center',
            backgroundColor: colors.valueBg,
            borderRadius: '4px',
            boxShadow: colors.valueBorder,
          }}
        >
          <Text size={1} weight="semibold" style={{ color: colors.valueText }}>
            {currentValue}{unit}
          </Text>
        </Box>
      </Flex>
    </Stack>
  )
}

