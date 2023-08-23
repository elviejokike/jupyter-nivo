#!/usr/bin/env python
# coding: utf-8

# Copyright (c) kike.
# Distributed under the terms of the Modified BSD License.

import pytest

from ..bar import BarWidget


def test_example_creation_blank():
    w = BarWidget()
    assert w.data == []
